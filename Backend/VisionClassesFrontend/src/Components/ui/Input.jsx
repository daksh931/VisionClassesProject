export default function Input(props) {
  return (
    <>
      <div class=" p-2 ">
        <label
          htmlFor={`${props.placeholder} `}
          className="block text-md font-medium text-gray-900 dark:text-white"
        >
          {props.placeholder}
        </label>
        <input
          type="text"
          id={`${props.placeholder} `}
          className="block w-full p-1 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-2"
          placeholder={`${props.placeholder} `}
          {...props}
        />
      </div>
    </>
  );
}
