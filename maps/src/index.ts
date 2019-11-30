import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const apiKey = "AIzaSyBNLrJhOMz6idD05pzfn5lhA-TAw-mAZCU";
const user = new User();
const company = new Company();
const map = new CustomMap("map");
map.addMarker(user);
map.addMarker(company);
