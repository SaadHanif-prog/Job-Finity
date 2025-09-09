import AGENTS_DATA from "@/constants/agents-data";

import { useParams } from "react-router-dom";

function Agent() {
 const { id } = useParams();
 const AGENT = AGENTS_DATA.find(a => a.id === +id!)!;

 return <AGENT.page />;
}

export default Agent;
