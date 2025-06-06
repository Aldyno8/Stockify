import { Upload, Plus } from "lucide-react";
import { Pencil, Trash2, Eye, X, ShoppingCart } from "lucide-react";

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
    <button
      type="submit"
      className="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 
                 text-white px-6 py-2 rounded-lg shadow-md 
                 transition duration-200 ease-in-out 
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Submit the form"
    >
      Submit
    </button>
  );
};

export const CancelButton = ({ handleFormclose }) => {
  return (
    <button
      type="button"
      onClick={handleFormclose}
      className="bg-gray-500 hover:bg-gray-600 active:bg-gray-700 
                 text-white px-6 py-2 rounded-lg shadow-md 
                 transition duration-200 ease-in-out 
                 focus:outline-none focus:ring-2 focus:ring-gray-300"
      aria-label="Cancel and close form"
    >
      Cancel
    </button>
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

export const ViewButton = ({ onView }) => {
  return (
    <div className="flex justify-center align-center bg-gray-300 rounded-xl w-10 h-10 hover:bg-gray-400 active:bg-gray-500">
      <button type="button" onClick={onView}>
        <Eye />
      </button>
    </div>
  );
};

export const CloseButton = ({ onClose }) => {
  return (
    <button
      onClick={onClose}
      className="absolute top-3 right-3 p-1 rounded-full bg-red-600 hover:bg-red-700 active:bg-red-800 
                 text-white shadow-md transition duration-200 ease-in-out"
      aria-label="Fermer la fiche produit"
    >
      <X className="w-3 h-3" />
    </button>
  );
};

export const RestockingButton = ({ onRestock }) => {
  return (
    <div className="flex justify-center align-center bg-green-600 rounded-xl w-10 h-10 hover:bg-gray-400 active:bg-gray-500">
      <button type="button" onClick={onRestock}>
        <ShoppingCart />
      </button>
    </div>
  );
};
 