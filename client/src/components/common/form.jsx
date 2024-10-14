import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const CommonForm = ({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
  isBtnDisabled,
}) => {
  function renderInputByComponentType(getContolItem) {
    let element = null;
    const value = formData[getContolItem.name] || "";

    switch (getContolItem.componentType) {
      case "input":
        element = (
          <Input
            name={getContolItem.name}
            placeholder={getContolItem.placeholder}
            id={getContolItem.name}
            type={getContolItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getContolItem.name]: event.target.value,
              })
            }
          />
        );
        break;
      case "select":
        element = (
          <Select
            onValueChange={(value) =>
              setFormData({
                ...formData,
                [getContolItem.name]: value,
              })
            }
            value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getContolItem.label} />
            </SelectTrigger>
            <SelectContent>
              {getContolItem.options && getContolItem.options.length > 0
                ? getContolItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;
      case "textarea":
        element = (
          <Textarea
            name={getContolItem.name}
            placeholder={getContolItem.placeholder}
            id={getContolItem.id}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getContolItem.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        element = (
          <Input
            name={getContolItem.name}
            placeholder={getContolItem.placeholder}
            id={getContolItem.name}
            type={getContolItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getContolItem.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return element;
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label className="mb-1">{controlItem.label}</Label>
            {renderInputByComponentType(controlItem)}
          </div>
        ))}
      </div>

      <Button disabled={isBtnDisabled} type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
};

export default CommonForm;
