import uploadIcon from "../assets/icons/upload.svg"

type UploadProps = React.ComponentProps<"input"> & {
  legend?: string
  filename?: string | null
}

function Upload({ legend, filename = null, ...props }: UploadProps) {
  return (
    <div className="text-gray-200 focus-within:text-green-100">
      <legend className="uppercase font-medium text-xxs text-inherit mb-2 ">
        {legend}
      </legend>

      <div className="bg-transparent text-gray-100 text-sm outline-none w-full h-12 rounded-lg flex items-center border border-gray-300  ">
        <input type="file" id="upload" className="hidden" {...props} />

        <span className="flex-1 text-xs md:text-sm lg:text-md pl-4">
          {filename ?? "Selecione o arquivo"}
        </span>

        <label
          htmlFor="upload"
          className="bg-green-100 hover:bg-green-200 transition ease-linear flex items-center h-12 px-4 rounded-lg cursor-pointer disabled:opacity-50"
        >
          <img src={uploadIcon} className="w-6 h-6" alt="icon de upload" />
        </label>
      </div>
    </div>
  )
}

export default Upload
