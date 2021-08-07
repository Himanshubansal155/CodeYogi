import { FC, memo } from "react";
import Input from "../../components/Input/Input";
import profile from "../../images/profile-12.jpeg";

interface Props {}

const Profile: FC<Props> = () => {
  return (
    <div className="md:ml-60 pt-16 p-4 relative w-full mt-16 bg-blue-900 bg-opacity-10 min-h-screen">
      <div className="w-full min-h-0 md:h-72 rounded-lg shadow-sm bg-white p-5">
        <h1 className="uppercase text-lg">General Information</h1>
        <div className="flex md:h-44 m-10">
          <div className="border-r-2 border-gray-100 md:h-full pr-10 py-2">
            <img
              src={profile}
              alt="profile"
              className="rounded-md h-28 mb-4 w-36"
            ></img>
            <span className="text-blue-700 text-base">Upload Picture</span>
          </div>
          <div className="flex flex-col md:h-full pl-10 w-full">
            <div className="flex flex-col md:flex-row md:h-1/2 w-full">
              <div className="flex flex-col w-full md:w-1/3 mr-5">
                <label htmlFor="firstName" className="text-gray-400 text-base">
                  First Name
                </label>
                <Input
                  type="text"
                  className="border-2 border-gray-200 rounded-md p-2"
                  id="firstName"
                  PlaceHolder="First Name"
                  touched={false}
                  error=""
                  errorBorder="border-opacity-0 w-full"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/3 mr-5">
                <label htmlFor="middleName" className="text-gray-400 text-base">
                  Middle Name
                </label>
                <Input
                  type="text"
                  className="border-2 border-gray-200 rounded-md p-2"
                  id="middleName"
                  PlaceHolder="Middle Name"
                  touched={false}
                  error=""
                  errorBorder="border-opacity-0 w-full"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/3 mr-10">
                <label htmlFor="lastName" className="text-gray-400 text-base">
                  Last Name
                </label>
                <Input
                  type="text"
                  className="border-2 border-gray-200 rounded-md p-2"
                  id="lastName"
                  PlaceHolder="Last Name"
                  touched={false}
                  error=""
                  errorBorder="border-opacity-0 w-full"
                />
              </div>
            </div>
            <div className="md:h-1/2 w-full flex flex-col items-baseline md:pr-10">
              <label htmlFor="profession" className="text-gray-400 text-base">
                Profession
              </label>
              <Input
                type="text"
                className="border-2 border-gray-200 rounded-md w-full"
                id="profession"
                PlaceHolder="Profession"
                touched={false}
                error=""
                errorBorder="border-opacity-0 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.defaultProps = {};

export default memo(Profile);
