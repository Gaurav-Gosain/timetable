import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Modal from "./Modal";

import { info, courseNames, fullnames } from "./Data";
import SelectMenu from "./SelectMenu";

function App() {
  const [day, setDay] = useState("all");
  const [open, setOpen] = useState(Array(20).fill(false));
  const [courseName, setCourseName] = React.useState(
    JSON.parse(localStorage.getItem("courseName")) || []
  );
  const hover = { scale: 1.1, zIndex: 1 };
  const tap = { scale: 0.95 };

  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });

  const Cell = ({ colSpan = 1, rowSpan = 1, cName, fullName, index }) => {
    return (
      <motion.td
        whileHover={hover}
        whileTap={tap}
        colSpan={colSpan}
        rowSpan={rowSpan}
        className={
          courseName.length > 0 && !courseName.includes(cName) && "empty"
        }
        id={
          courseName.length > 0 && !courseName.includes("F20PA") && index === 9
            ? "empty"
            : info[index].type
        }
        layoutId={`cell-${index}`}
        onClick={() => {
          setOpen([
            ...Array(index).fill(false),
            true,
            ...Array(19 - index).fill(false),
          ]);
        }}
      >
        {fullName}
      </motion.td>
    );
  };

  const EmptyCell = () => {
    return (
      <motion.td
        className="empty"
        id={courseName.length > 0 && !courseName.includes("F20PA") && "empty"}
      ></motion.td>
    );
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AnimateSharedLayout type="crossfade">
        <SelectMenu
          day={day}
          setDay={setDay}
          courseName={courseName}
          setCourseName={setCourseName}
        />
        {
          <motion.table
            style={{ height: `${day === "all" ? "90vh" : "30vh"}` }}
          >
            <motion.tbody>
              <motion.tr>
                <motion.td
                  whileHover={hover}
                  whileTap={tap}
                  style={{ width: "15vw" }}
                  className="empty"
                ></motion.td>
                <motion.td
                  className="titles"
                  id={
                    courseName.length > 0 &&
                    !courseName.includes("F20PA") &&
                    "empty"
                  }
                  style={{ width: "17vw" }}
                >
                  16:30 - 18:30
                </motion.td>
                <motion.td className="titles" style={{ width: "45vw" }}>
                  18:30 - 20:30
                </motion.td>
                <motion.td className="titles" style={{ width: "17vw" }}>
                  20:30 - 21:30
                </motion.td>
                <motion.td className="titles" style={{ width: "16vw" }}>
                  21:30 - 22:30
                </motion.td>
              </motion.tr>
              {(day === "sunday" || day === "all") && (
                <motion.tr>
                  <motion.td rowSpan="3" className="titles">
                    SUNDAY
                  </motion.td>
                  <motion.td
                    className="empty"
                    id={
                      courseName.length > 0 &&
                      !courseName.includes("F20PA") &&
                      "empty"
                    }
                  ></motion.td>
                  <Cell
                    cName={courseNames[0]}
                    fullName={fullnames[0]}
                    index={0}
                    colSpan={2}
                  />
                  <Cell
                    cName={courseNames[0]}
                    fullName={fullnames[0]}
                    index={1}
                  />
                </motion.tr>
              )}
              {(day === "sunday" || day === "all") && (
                <motion.tr>
                  <EmptyCell />
                  <Cell
                    cName={courseNames[1]}
                    fullName={fullnames[1]}
                    index={2}
                  />
                  <Cell
                    cName={courseNames[1]}
                    fullName={fullnames[1]}
                    index={3}
                  />
                  <Cell
                    cName={courseNames[1]}
                    fullName={fullnames[1]}
                    index={4}
                  />
                </motion.tr>
              )}
              {(day === "sunday" || day === "all") && (
                <motion.tr>
                  <EmptyCell />
                  <Cell
                    cName={courseNames[2]}
                    fullName={fullnames[2]}
                    index={5}
                  />
                  <Cell
                    cName={courseNames[2]}
                    fullName={fullnames[2]}
                    colSpan={2}
                    index={6}
                  />
                </motion.tr>
              )}
              {(day === "monday" || day === "all") && (
                <motion.tr>
                  <motion.td className="titles">MONDAY</motion.td>
                  <EmptyCell />
                  <Cell
                    cName={courseNames[3]}
                    fullName={fullnames[3]}
                    index={7}
                    colSpan={2}
                  />
                  <Cell
                    cName={courseNames[3]}
                    fullName={fullnames[3]}
                    index={8}
                  />
                </motion.tr>
              )}
              {(day === "tuesday" || day === "all") && (
                <motion.tr>
                  <motion.td rowSpan="2" className="titles">
                    TUESDAY
                  </motion.td>
                  <Cell
                    cName={courseNames[4]}
                    fullName={fullnames[4]}
                    index={9}
                    rowSpan={2}
                  />
                  <Cell
                    cName={courseNames[5]}
                    fullName={fullnames[5]}
                    index={10}
                  />
                  <Cell
                    cName={courseNames[5]}
                    fullName={fullnames[5]}
                    index={11}
                    colSpan={2}
                  />
                </motion.tr>
              )}
              {(day === "tuesday" || day === "all") && (
                <motion.tr>
                  <Cell
                    cName={courseNames[6]}
                    fullName={fullnames[6]}
                    index={12}
                  />
                  <Cell
                    cName={courseNames[6]}
                    fullName={fullnames[6]}
                    index={13}
                    colSpan={2}
                  />
                </motion.tr>
              )}
              {(day === "wednesday" || day === "all") && (
                <motion.tr>
                  <motion.td rowSpan="2" className="titles">
                    WEDNESDAY
                  </motion.td>
                  <EmptyCell />
                  <Cell
                    cName={courseNames[7]}
                    fullName={fullnames[7]}
                    index={14}
                  />
                  <Cell
                    cName={courseNames[7]}
                    fullName={fullnames[7]}
                    index={15}
                    colSpan={2}
                  />
                </motion.tr>
              )}
              {(day === "wednesday" || day === "all") && (
                <motion.tr>
                  <EmptyCell />
                  <Cell
                    cName={courseNames[8]}
                    fullName={fullnames[8]}
                    index={16}
                  />
                  <Cell
                    cName={courseNames[8]}
                    fullName={fullnames[8]}
                    index={17}
                  />
                  <EmptyCell />
                </motion.tr>
              )}
              {(day === "thursday" || day === "all") && (
                <motion.tr>
                  <motion.td className="titles">THURSDAY</motion.td>
                  <EmptyCell />
                  <Cell
                    cName={courseNames[9]}
                    fullName={fullnames[9]}
                    index={18}
                  />
                  <Cell
                    cName={courseNames[9]}
                    fullName={fullnames[9]}
                    index={19}
                    colSpan={2}
                  />
                </motion.tr>
              )}
            </motion.tbody>
          </motion.table>
        }
        {open.map((object, i) => (
          <Modal open={open[i]} setOpen={setOpen} info={info[i]} key={i} />
        ))}
      </AnimateSharedLayout>
    </ThemeProvider>
  );
}

export default App;
