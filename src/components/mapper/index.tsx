import clsx from "clsx";
import { Field, Form, Formik } from "formik";
import {
  ControllerInputs,
  type ControllerMapping,
  OptionalControllerInputs,
  saveControllerMapping,
} from "../../services/inputs";
import "./index.css";

type ControllerMapperProps = {
  showMapper: boolean;
  mapping: ControllerMapping;
  setMapping: (mapping: ControllerMapping) => void;
};

export function ControllerMapper(
  { showMapper, mapping, setMapping }: ControllerMapperProps,
) {
  return (
    <div className={clsx("mapper", { hidden: !showMapper })}>
      <Formik
        initialValues={mapping}
        onSubmit={async (newMapping, { resetForm }) => {
          await saveControllerMapping(newMapping);
          setMapping(newMapping);
          resetForm({ values: newMapping });
        }}
      >
        {({ values: mappingKeys, dirty }) => (
          <Form className={clsx("form", { slide: showMapper })}>
            <div className="values">
              {Object.keys(mappingKeys).map((mappingKey) => (
                <div key={mappingKey} className="value">
                  <label htmlFor={mappingKey}>{mappingKey}</label>

                  <Field
                    as="select"
                    name={mappingKey}
                  >
                    {["airRollLeft", "airRollRight"].includes(mappingKey) && (
                      <option
                        className="no-binding"
                        value={OptionalControllerInputs.None}
                      >
                        - No binding -
                      </option>
                    )}

                    {Object.values(ControllerInputs).map((input) => (
                      <option
                        key={input}
                        value={input}
                      >
                        {input}
                      </option>
                    ))}
                  </Field>
                </div>
              ))}
            </div>

            <div className={clsx("reset-submit", { hidden: !dirty })}>
              <button type="reset">
                Reset
              </button>

              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
