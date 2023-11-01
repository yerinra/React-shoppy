/* eslint-disable react/prop-types */

const User = ({ user }) => {
  return (
    <div className="flex gap-1 items-center font-semibold">
      <img
        src={user.photoURL}
        alt={user.displayName}
        className="h-5 w-5 rounded-full hidden sm:block"
        onClick={() => console.log(user)}
      />
      <span className="hidden md:block">{user.displayName}</span>
    </div>
  );
};

export default User;
