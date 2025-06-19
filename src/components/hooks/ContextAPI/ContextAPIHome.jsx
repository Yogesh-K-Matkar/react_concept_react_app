import { useContext } from "react";
import { BioContextStore } from "./ContextAPIIndex";

export const ContextAPIHome = () => {
  const { bioInfo, addressInfo } = useContext(BioContextStore);

  return (
    <section
      className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-amber-200  text-black`}>
      <h1>Passing Props Using Context API</h1>
      <div className={`justify-center items-center`}>
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
          <tr>
            <td>
              <hr />
            </td>
          </tr>
          <tr>
            <td>
              <table>
                <tr>
                  <td>
                    <h1>Address Info</h1>
                  </td>
                </tr>
                <tr>
                  <td>City:-</td>
                  <td>{addressInfo.Address.City}</td>
                </tr>
                <tr>
                  <td>State:-</td>
                  <td>{addressInfo.Address.State}</td>
                </tr>
                <tr>
                  <td>Pincode:</td>
                  <td>{addressInfo.Address.Pincode}</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </section>
  );
};
