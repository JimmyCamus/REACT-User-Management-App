import Button from "./Button.js";
import Input from "./Input.js";
import useForm from "../hooks/useForm.js";

const UserForm = ({submit}) => {

    const [form, handleChange, reset] = useForm({
        name: "",
        lastName: "",
        email: "",
    });

    const handleSubmit = e => {
        e.preventDefault();
        submit(form);
        reset();
    }

    return(
        <form onSubmit={handleSubmit}>
        <Input
          label="Nombre"
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          label="Apellido"
          name="lastName"
          placeholder="Apellido"
          value={form.lastName}
          onChange={handleChange}
        />
        <Input
          label="Correo"
          name="email"
          placeholder="Correo"
          value={form.email}
          onChange={handleChange}
        />
        <Button>Enviar</Button>
      </form>
    );
}

export default UserForm;