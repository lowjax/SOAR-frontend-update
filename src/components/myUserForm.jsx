import { useForm } from "react-hook-form"
const formClassName = ""
const inputClassName = ""
const errorClassName = ""

export const MyUserForm = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm()

   const watchPassword = watch(["password", "password_confirmation"])
   const passwordsMatch = (watchPassword[0] = watchPassword[1])
   console.log(passwordsMatch)

   const onSubmit = (formData) => {
      if (!passwordsMatch) return

      setStatus("Loading.....")

      fetch("api/users/create", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(formData),
      })
         .then((response) => {
            if (response.status == 200) {
               setStatus("Saved!")
            } else {
               setStatus("API Error")
            }
         })
         .catch((error) => {
            setStatus("Client Error: " + error)
         })

      console.log(formData)
   }

   return (
      <form>
         <label>first name:</label>
         <input className={inputClassName} onSubmit={handleSubmit(onSubmit)} />
         <span className={errorClassName}></span>
         <label>last name:</label>
         <input
            className={inputClassName}
            {...register("firstname", { required: true, maxLength: 20, pattern: /^[a-zA-Z]*$/ })}
         />
         <span className={errorClassName}>{errors.firstname && "invalid first name"}</span>

         <label>Email: </label>
         <input
            type="email"
            className={inputClassName}
            {...register("email", { required: true, maxLength: 20, pattern: /^[a-zA-Z]*$/ })}
         />
         <span className={errorClassName}>{errors.firstname && "invalid last name"}</span>

         <label>Username: </label>
         <input
            className={inputClassName}
            {...register("username", { required: true, maxLength: 20, pattern: /^[a-zA-Z]*$/ })}
         />
         <span className={errorClassName}>{errors.firstname && "invalid  username"}</span>

         <label>Password: </label>
         <input
            type="password"
            className={inputClassName}
            {...register("username", { required: true, maxLength: 20, pattern: /^[a-zA-Z]*$/ })}
         />
         <span className={errorClassName}></span>

         <label>Confirm Password: </label>
         <input type="password" className={inputClassName} />
         <span className={errorClassName}>
            {errors.password_confirmation && "invalid password"}
            {!passwordsMatch ? "the passwords must match" : ""}
         </span>

         <label>Role: </label>
         <select className={inputClassName} {...register("role", { required: true })}>
            <option value="user">User</option>
            <option value="staff">Staff</option>
            <option value="admin">Admin</option>
         </select>
         <span className={errorClassName}>{errors.role && "Must select role"}</span>

         <input className={inputClassName} type="submit" />
      </form>
   )
}
