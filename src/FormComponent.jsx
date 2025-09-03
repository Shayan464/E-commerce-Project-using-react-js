import LanguageSelector from "./LanguageSelector";
import RelationshipStatus from "./RelationshipStatus";
import DescriptionField from "./DescriptionField";
import Button from "./Button";
import InputField from "./InputField";
import PasswordInput from "./PasswordInput";
import ConditionSelect from "./SelectInput";

const FormComponent = ({ user, onInputChange, onSubmit, onCancel }) => {
  return (
    <form
    onSubmit={onSubmit}
    className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-lg space-y-6"
  >
    <h1 className="text-2xl">Registration Form</h1>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <InputField
        label="FirstName"
        name="FirstName"
        value={user.FirstName}
        onChange={onInputChange}
        placeholder="First Name"
      />

      <InputField
        label="LastName"
        name="LastName"
        value={user.LastName}
        onChange={onInputChange}
        placeholder="Last Name"
      />

      <InputField
        label="Email"
        name="Email"
        value={user.Email}
        type="email"
        onChange={onInputChange}
        placeholder="Email"
      />

        <PasswordInput 
        value={user.Password} 
        onChange={onInputChange} />
      
       <LanguageSelector
        name="Language"
        label="Language"
        selected={user.Language}
        onChange={onInputChange}
      />

      <RelationshipStatus
        name="Relation"
        value={user.Relation}
        onChange={onInputChange}
      />
    </div>
<div></div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <ConditionSelect
      field="Gender"
      name="Gender"
      value={user.Gender}
      onChange={onInputChange}
      label="Select Gender"
       />
 
      <InputField
        label="DOB"
        name="DOB"
        type="date"
        value={user.DOB}
        onChange={onInputChange}
        style={
          "border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-46  min-w-[200px]"
        }
      />
     <ConditionSelect
       field="User Type"
      name="Type"
      value={user.Type}
      onChange={onInputChange}
      label="Select User Type"
/>
      </div>

    <DescriptionField
      label="Description"
      name="Description"
      value={user.Description}
      onChange={onInputChange}
    />
    <Button 
    isEditing={user.isEditing} 
    handleCancel={onCancel} />
  </form>
  );
};

export default FormComponent;
