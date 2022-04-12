import React from "react"
import Button from "./Button"

export default function ContactForm({ className, children, ...props }) {
  console.log(props.buttonFool)

  return (
    <form
      className={`p-6 flex flex-col justify-center ${
        className ? className : ""
      }`}
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="hidden">
          Name
        </label>
        <input
          type="text"
          placeholder="Name"
          className="font-semibold text-lg input input-bordered input-secondary input-md w-full"
        />
      </div>

      <div className="flex flex-col mt-2">
        <label htmlFor="email" className="hidden">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="invalid:input-error mt-2 font-semibold text-lg input input-bordered input-secondary input-md w-full"
        />
      </div>

      <div className="flex flex-col mt-2">
        <textarea
          className="textarea textarea-info font-semibold text-lg mt-2 min-h-[120px]"
          placeholder="Message"
        ></textarea>
      </div>

      <div className="flex flex-col mt-2">
        <Button
          tag="button"
          type="submit"
          className={`btn text-white btn-info mt-2 btn-wide ${
            props.buttonFool ? "w-full" : ""
          }`}
        >
          Submit
        </Button>
      </div>
    </form>
  )
}
