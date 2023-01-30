import { useUser } from "./useUser";

export function HookLogin() {
  const { data, onInputChange } = useUser({});

  return (
    <div>
      <form className="bg-gray-400 p-5">
        <input
          className="mx-2"
          value={data.username}
          type="username"
          name="username"
          onChange={onInputChange}
        ></input>
        <input
          className="mx-2"
          value={data.password}
          type="password"
          name="password"
          onChange={onInputChange}
        ></input>
        <input
          value={data.checkbox}
          type="checkbox"
          name="checkbox"
          onChange={onInputChange}
        ></input>
      </form>
    </div>
  );
}
