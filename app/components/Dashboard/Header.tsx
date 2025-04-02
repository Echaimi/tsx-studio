interface HeaderProps {
  userName: string;
  userImage?: string;
}

export function Header({ userName, userImage }: HeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900">Bonjour {userName} !</h1>
      {userImage && (
        <img
          src={userImage}
          alt={userName}
          className="w-12 h-12 rounded-full object-cover object-center"
        />
      )}
    </div>
  );
}
