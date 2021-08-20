import { FC, memo } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { userFetchCompleted } from "../../actions/user.actions";
import { meChange } from "../../api/Auth";
import Button from "../../components/Button/Button";
import HomeLayout from "../../components/HomeLayout";
import Input from "../../components/Input/Input";
import { User } from "../../models/User";
import { meSelector } from "../../selectors/auth.selectors";
import { SidebarSelector } from "../../selectors/sidebar.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const Profile: FC<Props> = () => {
  let user = useAppSelector(meSelector);
  let user1: User = user;
  const dispatch = useDispatch();
  const toggle = useAppSelector(SidebarSelector);

  return (
    <HomeLayout toggle={toggle.isSidebarOpen}>
      <>
      <div className="w-full min-h-0 rounded-lg shadow-sm bg-white p-5">
        <h1 className="uppercase text-lg">General Information</h1>
        <p className="text-gray-400 text-sm">
          Last Updated at: {user.updated_at}
        </p>
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
                  onChange={(e) => {
                    user1.first_name = e.target.value;
                  }}
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
                  onChange={(e) => {
                    user1.middle_name = e.target.value;
                  }}
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
                  onChange={(e) => {
                    user1.last_name = e.target.value;
                  }}
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
                onChange={(e) => {
                  user1.email = e.target.value;
                }}
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
              Bio (unchangeable)
            </label>
            <textarea
              id="bio"
              placeholder="Tell me About Yourself..."
              className="border-2 border-gray-200 rounded-md p-2 w-full"
              defaultValue={user.bio}
              readOnly
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
                onChange={(e) => {
                  user1.phone_number = +e.target.value;
                }}
              />
            </div>
            <div className="md:w-1/2">
              <label
                htmlFor="alternatePhone"
                className="text-gray-400 text-base"
              >
                Alternate Phone (unchangeable)
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
                readOnly
              />
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row">
            <div className="md:w-1/2 md:mr-7">
              <label htmlFor="home" className="text-gray-400 text-base">
                HomeTown (unchangeable)
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
                readOnly
              />
            </div>
            <div className="md:w-1/2">
              <label htmlFor="code" className="text-gray-400 text-base">
                State Code (unchangeable)
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
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "fixed ease-linear duration-1000 bottom-0 left-4 right-4 h-16 px-4 p-3 rounded-t-md bg-gray-900 flex justify-between " +
          (toggle.isSidebarOpen && "md:left-64")
        }
      >
        <Button
          children="Reset All"
          className="px-4 h-full"
          onClick={() => {}}
        />
        <FaSpinner
          className="w-5 animate-spin mx-auto text-white h-full hidden"
          id="spinner"
        />
        <Button
          children="Save changes"
          theme="success"
          className=" bg-green-600 h-full px-4"
          onClick={() => {
            document.getElementById("spinner")!.classList.remove("hidden");
            meChange({
              first_name: user1.first_name,
              middle_name: user1.middle_name,
              last_name: user1.last_name,
              email: user1.email,
              phone_number: user1.phone_number,
            }).then((response) => {
              document.getElementById("spinner")!.classList.add("hidden");
              // authAction.login(response.data);
              dispatch(userFetchCompleted(response));
            });
          }}
        />
      </div>
      </>
    </HomeLayout>
  );
};

Profile.defaultProps = {};

export default memo(Profile);
