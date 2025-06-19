import { useContext } from "react";
import { BioContextStore } from "./ContextAPIIndex";

export const ContextAPIAbout = () => {
  const { bioInfo } = useContext(BioContextStore);

  return (
    <section
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-amber-200 text-black`}>
      <h1>Passing Props Using Context API</h1>
      <div>
        <table>
          <tr>
            <td>
              <table>
                <tr>
                  <td>
                    <h1>Basic Info</h1>
                  </td>
                </tr>
                <tr>
                  <td>FullName:-</td>
                  <td>{bioInfo.FullName}</td>
                </tr>
                <tr>
                  <td>FirstName:-</td>
                  <td>{bioInfo.FirstName}</td>
                </tr>
                <tr>
                  <td>LastName:</td>
                  <td>{bioInfo.LastName}</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};
