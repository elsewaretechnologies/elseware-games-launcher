import { Switch as EUISwitch } from "elseware-ui";

function Switch({ name, label, description, showStatus }) {
  return (
    <div className="py-3">
      <EUISwitch
        name={name}
        label={label}
        description={description}
        showStatus={showStatus}
      />
    </div>
  );
}

export default Switch;
