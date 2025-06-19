export const PDParent = () => {
  return (
    <section
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-amber-200 text-white`}
    >
      <h1>Hello Parent</h1>
      <PDChild data="RECT CHILD JS" />
    </section>
  );
};

const PDChild = (prop) => {
  const { data } = prop;
  return (
    <section>
      <h1>Hello Child</h1>
      <PDGrandChild data={data} />
    </section>
  );
};

const PDGrandChild = (prop) => {
  const { data } = prop;
  return (
    <section>
      <h1>Hello Grand Child in {data}</h1>
    </section>
  );
};
