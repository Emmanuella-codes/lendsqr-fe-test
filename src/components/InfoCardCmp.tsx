import { Box, Flex, Icon, Table, Thead, Tr, Th, Tbody } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import HamburgerIcon from "../assets/SvgCmp/HamburgerIcon";
import axios from "axios";

interface InfoCardProps {
  field: string;
  icon: any;
}

const InfoCardCmp = () => {
  const infoCardList: InfoCardProps[] = [
    { field: "ORGANIZATION", icon: HamburgerIcon },
    { field: "USERNAME", icon: HamburgerIcon },
    { field: "EMAIL", icon: HamburgerIcon },
    { field: "PHONE NUMBER", icon: HamburgerIcon },
    { field: "DATE JOINED", icon: HamburgerIcon },
    { field: "STATUS", icon: HamburgerIcon },
  ];

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);
  console.log(users);

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Flex flexDir="row">
              {infoCardList.map((item, index) => (
                <Box>
                  <Th key={index}>{item.field}</Th>
                  <Icon as={item.icon} />
                </Box>
              ))}
            </Flex>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, index) => (
            <Tr key={index}></Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default InfoCardCmp;
