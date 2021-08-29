const Button = ({ name }) => {
  return (
    <>
      <button
        type="submit"
        className="flex-five py-4 text-center text-base font-medium rounded-3xl bg-primary  active:bg-secondary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:rounded-2xl"
      >
        {name}
      </button>
    </>
  );
};

export default Button;
