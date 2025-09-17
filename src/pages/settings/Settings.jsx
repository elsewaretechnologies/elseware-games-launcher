// Hooks / Node modules / Styles
import { Chapter, Form, Button } from "elseware-ui";
import * as Yup from "yup";

// Reducers / Actions

// Utils / Functions

// Components
import DefaultLayout from "../../layout/DefaultLayout";
import Section from "../../components/elseware-overrides/Section";
import Switch from "../../components/elseware-overrides/Switch";

// Sub-Components

// Data / Images / Icons

// Initial form values
const initialValues = {
  enableOfflineMode: true,
  runInBackground: true,
  runAtStartup: true,
  productNotifications: true,
  automaticUpdates: true,
};

// Yup validation schema
const validations = Yup.object({
  enableOfflineMode: Yup.boolean().oneOf([true], "You must enable this"),
  runInBackground: Yup.boolean().oneOf([true], "You must enable this"),
  runAtStartup: Yup.boolean().oneOf([true], "You must enable this"),
  productNotifications: Yup.boolean().oneOf([true], "You must enable this"),
  automaticUpdates: Yup.boolean().oneOf([true], "You must enable this"),
});

// Form submission handler
const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

export default function Settings() {
  return (
    <DefaultLayout>
      <Chapter level={2}>Settings</Chapter>

      <Form
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validations}
        onSubmit={onSubmit}
      >
        <Section>Preferences</Section>

        <Switch
          name="enableOfflineMode"
          label="Enable Offline Mode"
          description="When offline mode is enabled, you can access previously downloaded games/products without an internet connection."
        />
        <Switch
          name="runInBackground"
          label="Run in Background"
          description="When enabled, the application will continue to run in the background even when closed, allowing for faster startup times and background downloads."
        />
        <Switch
          name="runAtStartup"
          label="Run at Startup"
          description="When enabled, the application will automatically start when you log into your computer."
        />

        <Section>Notifications</Section>

        <Switch
          name="productNotifications"
          label="Show Product Notifications"
          description="Receive notifications about new products, updates, and special offers."
        />

        <Section>Software Updates</Section>

        <Switch
          name="automaticUpdates"
          label="Automatic Updates"
          description="When enabled, the application will automatically download and install updates in the background."
        />
        <div className="text-sm py-3">
          <div className="flex flex-row items-center gap-2">
            <div>Name: </div>
            <div>elseware-games-launcher-1.0.0.dmg</div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div>Version: </div>
            <div>1.0.0</div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div>Release Date: </div>
            <div>01/01/2025</div>
          </div>
        </div>

        <Button
          type="button"
          text="Check for Updates"
          variant="success"
          size="md"
          shape="softRoundedSquare"
        />
      </Form>
    </DefaultLayout>
  );
}
