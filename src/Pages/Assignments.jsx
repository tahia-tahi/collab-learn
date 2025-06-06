import { useLoaderData } from "react-router";
import AssignmentCard from "../Components/AssignmentCard";

const Assignments = () => {


    const allAssignments = useLoaderData()
    console.log(allAssignments);

    return (
        <div>
<h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
  📚 See All Assignments
</h1>            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    allAssignments.map((assignment)=><AssignmentCard key={assignment._id} assignment={assignment}></AssignmentCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;