import AgentDetailPage from "@/src/view/team/agentDetailPage";

export default function Page({ params }: { params: { id: string } }) {
  return <AgentDetailPage id={params.id} />;
}
