import { AuthProvider } from "./AuthProvider";
import Page from "./Page";

const App = () => {
  return (
    <div className="bg-red-400 min-h-screen pb-1  ">
      <AuthProvider>
        <Page />
      </AuthProvider>
      <div className="text-white text-center p-3  ">&copy; Byte-burst.xyz</div>
    </div>
  );
};

export default App;
