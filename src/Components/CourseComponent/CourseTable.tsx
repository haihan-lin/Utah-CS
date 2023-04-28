import { observer } from "mobx-react-lite";
import { FC, useContext } from "react";
import { DataContext } from "../../App";
import { Table, TableBody, TableHead } from "@mui/material";
import AllInfoRow from "./AllInfoRow";
import { StickyTableContainer } from "../GeneralComponents";
import { BoldHeaderCell } from "../StateTable";


const CourseTable: FC = () => {

    const courseData = useContext(DataContext).course;

    // const [sortUp, setSortUp] = useState(true);
    // const [sortAttribute, setSortAttribute] = useState('District Name');
    // const [sortedData, setSortedData] = useState(courseData);
    // const [sortCSPercentage, setSortPercentage] = useState(true);

    // const courseAttributeFinder = (attributeName: string, selectedRow: (string | number)[]) =>
    //     findAttribute(attributeName, courseData[1], selectedRow);



    return <StickyTableContainer>
        <Table stickyHeader aria-label="sticky table" style={{ paddingLeft: '10px', paddingRight: '10px', paddingTop: '10px' }}>
            <TableHead>
                <BoldHeaderCell>Course Name</BoldHeaderCell>
                <BoldHeaderCell>Total Students</BoldHeaderCell>
                <BoldHeaderCell>Gender</BoldHeaderCell>
                <BoldHeaderCell>
                    Race
                </BoldHeaderCell>
                <BoldHeaderCell>Disability</BoldHeaderCell>
                <BoldHeaderCell> Econ Disadvantaged</BoldHeaderCell>
                <BoldHeaderCell>ESL</BoldHeaderCell>
            </TableHead>
            <TableBody>
                {courseData.slice(2, -1).map((courseEntry) => {
                    return <AllInfoRow courseEntry={courseEntry} titleEntry={courseData[1] as string[]} />;
                })}

            </TableBody>

        </Table>


    </StickyTableContainer>;
};
export default observer(CourseTable);