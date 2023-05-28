import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import AdminLayout from "./layout/AdminLayout";
import UserLayout from "./layout/UserLayout";
import PrivateRoute from "./layout/PrivateRoute";
import Register from "./Register";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/movie_list"
          element={
            <UserLayout>
              <MovieList />
            </UserLayout>
          }
        />

        <Route exact path="/" element={<PrivateRoute />}>
          <Route
            path="/add_movie"
            element={
              <AdminLayout>
                <AddMovie />
              </AdminLayout>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
