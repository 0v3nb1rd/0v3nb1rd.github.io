---
id: 26
path: '/send-large-files-from-frontend-to-the-backend'
thumbnail: './thumbnail.png'
date: 2023-03-23T07:50:01.889Z
edited: 2023-03-23T07:50:01.889Z
next: '/how-to-make-an-nft'
title: 'Send large files from frontend to the backend'
tags:
  - dev
  - js
  - discuss
popular: false
draft: false
---

Recently, in one of my frontend interviews,

**Interviewer** — Suppose we are giving the user option to upload a file and save it. Then how will you send the file to the backend?
**Me** — We can directly send it in the body of a POST API call.

**Interviewer** — What if it is a large file? suppose, of 2GB.
**Me** — uhh! Maybe we can compress the file and then can split it into parts and then can send the parts one by one.

**Interviewer** — But how will you do it?
**Me** — I am not really sure. I haven’t experienced any problem like this so far.

## One way of doing it
In javascript, we have something called FileReader. What we can do is, we can create a FileReader object and then we can read the uploaded file as an array buffer.



```js
const fileReader = new FileReader();
fileReader.readAsArrayBuffer(file.files[0]); // file.files[0] shows the uploaded file
```

After this, we can use the - `onload` method of the file reader object, which is triggered once the file reading is completed.


```js
const fileReader = new FileReader();
fileReader.readAsArrayBuffer(file.files[0]); // file.files[0] shows the uploaded file
fileReader.onload = (event) => {}
```

The event parameter stored the content of the file as an array buffer in the
- `event.target.result` field. So, using this, we can split the content into small chunks and then can send those chunks to the backend (basically, we will stream the chunks).

```js
fileReader.onload = async (event) => {
   const content = event.target.result;
   const CHUNK_SIZE = 1000;
 
   const totalChunks = event.target.result.byteLength / CHUNK_SIZE; // generate a file name
   const fileName = Math.random().toString(36).slice(-6) + file.files[0].name;

   for (let chunk = 0; chunk < totalChunks + 1; chunk++) {
       let CHUNK = content.slice(chunk CHUNK_SIZE, (chunk + 1) CHUNK_SIZE)
       await fetch('/upload?fileName=' + fileName, {
           'method' : 'POST',
           'headers' : {
               'content-type' : "application/octet-stream",
               'content-length' : CHUNK.length,
           },
           'body': CHUNK
       })
   }
}
```

If you see, we have added the file name as a query parameter, and you might wonder why we are sending the file name as well. See, all the API calls to the backend server are stateless, which means API does not remember the last call it received, and we are streaming data, so to append the content to a file, we need to have a unique identifier, which would be the file name for our case.

And because the user might want to upload the file with the same file name to make sure the backend does work as expected, we need a unique identifier. For that, we use this beautiful one-liner:

```js
leMath.random().toString(36).slice(-6)
```

Ideally, we should not send any custom header because most of the proxies such as Nginx or HAProxy might block it.


## Now on the backend
We can do something like

```js
if(req.url=== ‘/upload’ && req.method == ‘POST’) {
   const query = new URLSearchParams(req.url);
   const fileName = query.get(‘/upload?fileName’);
    
   req.on('data', chunk => {
     fs.appendFileSync(fileName, chunk); // append to a file on the disk
   })

   return res.end('successfully file uploaded!')
}
```