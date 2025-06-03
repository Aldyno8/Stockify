import { AddButton, ExportButton } from "../atoms/button";

export const MaterialAction = ({ handleFormOpen }) => {
  return (
    <div className="flex flex-row relative justify-end items-center my-4">
      <ExportButton />
      <AddButton handleFormOpen={handleFormOpen}/>
    </div>
  )
}
