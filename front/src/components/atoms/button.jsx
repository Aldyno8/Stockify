import { Upload, Plus } from "lucide-react";
import { Pencil, Trash2 } from "lucide-react";

export const AddButton = ({ handleFormOpen }) => {
  return (
    <div
      className="bg-[#193CB8] hover:bg-[#162f93] active:bg-[#0f2270] 
            flex rounded-md text-white justify-center items-center 
            transition mx-4 duration-200 cursor-pointer shadow-md"
    >
      <button
        className="bg-transparent   shadow-md h-12 w-25"
        onClick={handleFormOpen}
      >
        Add new
      </button>
      <Plus className="w-5 mr-2" />
    </div>
  );
};

export const ExportButton = () => {
  return (
    <div
      className="bg-[#193CB8] hover:bg-[#162f93] active:bg-[#0f2270] 
            flex rounded-md text-white justify-center items-center 
            transition mx-4 duration-200 cursor-pointer shadow-md"
    >
      <button className="bg-transparent  shadow-md h-12 w-35">Upload</button>
      <Upload className="w-5 mr-2" />
    </div>
  );
};

export const SubmitButton = () => {
  return (
    <div className="flex flex-row gap-2">
      <button
        type="submit"
        className="bg-[#193CB8] p-2 m-4 hover:bg-[#162f93] active:bg-[#0f2270] 
            flex rounded-md text-white justify-center items-center 
            transition mx-4 duration-200 cursor-pointer shadow-md"
      >
        Submit
      </button>
    </div>
  );
};

export const CancelButton = ({ handleFormclose }) => {
  return (
    <div className="flex">
      <button
        type="button"
        className="bg-[#193CB8] p-2 m-4 hover:bg-[#162f93] active:bg-[#0f2270] 
            flex rounded-md text-white justify-center items-center 
            transition mx-4 duration-200 cursor-pointer shadow-md"
        onClick={handleFormclose}
      >
        Cancel
      </button>
    </div>
  );
};

export const DeleteButton = ({ onDelete, id }) => {
  return (
    <div className="flex justify-center align-center bg-red-500 rounded-xl w-10 h-10 hover:bg-red-600 active:bg-red-800">
      <button type="button" onClick={onDelete} value={id}>
        <Trash2 />
      </button>
    </div>
  );
};

export const EditButton = ({ onEdit }) => {
  return (
    <div className="flex justify-center align-center bg-gray-300 rounded-xl w-10 h-10 hover:bg-gray-400 active:bg-gray-500">
      <button type="button" onClick={onEdit}>
        <Pencil />
      </button>
    </div>
  );
};
