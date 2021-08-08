import { FC, memo } from "react";
import { meChange } from "../../api/Auth";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { meSelector } from "../../selectors/auth.selectors";
import { SidebarSelector } from "../../selectors/sidebar.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const Profile: FC<Props> = () => {
  let user = useAppSelector(meSelector);
  const toggle = useAppSelector(SidebarSelector);
  return (
    <div className={"pt-16 p-4 relative w-full mt-16 bg-blue-900 bg-opacity-10 ease-linear duration-1000 min-h-screen " + (toggle.isSidebarOpen && " md:ml-60")}>
      <div className="w-full min-h-0 rounded-lg shadow-sm bg-white p-5">
        <h1 className="uppercase text-lg">General Information</h1>
        <div className="flex flex-col md:flex-row md:h-44 m-10">
          <div className="md:border-r-2 border-gray-100 md:h-full pr-10 py-2">
            <img
              src={user.profile_pic_url}
              alt="profile"
              className="rounded-md h-28 mb-4 w-36"
            ></img>
            <span className="text-blue-700 text-base">Upload Picture</span>
          </div>
          <div className="flex flex-col md:h-full md:pl-10 w-full">
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
                  defaultValue={user.first_name}
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
                  defaultValue={user.middle_name}
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
                  defaultValue={user.last_name}
                />
              </div>
            </div>
            <div className="md:h-1/2 w-full flex flex-col items-baseline md:pr-10">
              <label htmlFor="email" className="text-gray-400 text-base">
                Email Address
              </label>
              <Input
                type="email"
                className="border-2 border-gray-200 rounded-md w-full"
                id="email"
                PlaceHolder="Email Address"
                touched={false}
                error=""
                errorBorder="border-opacity-0 w-full"
                defaultValue={user.email}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-0 rounded-lg shadow-sm bg-white p-5 mt-5">
        <h1 className="uppercase text-lg">About</h1>
        <div className="p-8">
          <div className="flex flex-col w-full mr-5">
            <label htmlFor="bio" className="text-gray-400 text-base">
              Bio
            </label>
            <textarea
              id="bio"
              placeholder="Tell me About Yourself..."
              className="border-2 border-gray-200 rounded-md p-2 w-full"
              defaultValue={user.bio}
              rows={5}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="w-full min-h-0 rounded-lg shadow-sm bg-white p-5 mt-5 mb-10">
        <h1 className="uppercase text-lg">Contact</h1>
        <div className="flex flex-col w-full p-10">
          <div className="w-full flex flex-col md:flex-row mb-7">
            <div className="md:w-1/2 md:mr-7">
              <label htmlFor="phone" className="text-gray-400 text-base">
                Phone
              </label>
              <Input
                type="phone"
                className="border-2 border-gray-200 rounded-md p-2"
                id="phone"
                PlaceHolder="Phone number"
                touched={false}
                error=""
                errorBorder="border-opacity-0 w-full"
                defaultValue={user.phone_number}
              />
            </div>
            <div className="md:w-1/2">
            <label htmlFor="alternatePhone" className="text-gray-400 text-base">
                Alternate Phone
              </label>
              <Input
                type="phone"
                className="border-2 border-gray-200 rounded-md p-2"
                id="alternatePhone"
                PlaceHolder="Alternate Phone number"
                touched={false}
                error=""
                errorBorder="border-opacity-0 w-full"
                defaultValue={user.alternate_phone_number}
              />
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row">
            <div className="md:w-1/2 md:mr-7">
            <label htmlFor="home" className="text-gray-400 text-base">
                HomeTown
              </label>
              <Input
                type="text"
                className="border-2 border-gray-200 rounded-md p-2"
                id="home"
                PlaceHolder="HomeTown"
                touched={false}
                error=""
                errorBorder="border-opacity-0 w-full"
                defaultValue={user.hometown}
              />
            </div>
            <div className="md:w-1/2">
            <label htmlFor="code" className="text-gray-400 text-base">
                State Code
              </label>
              <Input
                type="text"
                className="border-2 border-gray-200 rounded-md p-2"
                id="code"
                PlaceHolder="State code"
                touched={false}
                error=""
                errorBorder="border-opacity-0 w-full"
                defaultValue={user.state_code}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={"fixed ease-linear duration-1000 bottom-0 left-4 right-4 h-16 px-4 p-3 rounded-t-md bg-gray-900 flex justify-between " + (toggle.isSidebarOpen && "md:left-64")}>
        <Button
          children="Reset All"
          className="px-4 h-full"
          onClick={() => {}}
        />
        <Button
          children="Save changes"
          theme="success"
          className=" bg-green-600 h-full px-4"
          onClick={() => {
            meChange({ last_name: "bansal" }).then((response) =>
              console.log(response)
            );
          }}
        />
      </div>
    </div>
  );
};

Profile.defaultProps = {};

export default memo(Profile);
