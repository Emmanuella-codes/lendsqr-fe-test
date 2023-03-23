import { Box, Flex, Image, Text } from "@chakra-ui/react";
import IUsersIcon from "../assets/users-icon.svg";
import ActiveUsersIcon from "../assets/active-users.svg";
import UsersLoanIcon from "../assets/users-loan.svg";
import UsersSavingsIcon from "../assets/users-savings.svg";

interface UserCard {
  image: any;
  title: string;
  amount: string;
}

const UserCardCmp = () => {
  const userCardItems: UserCard[] = [
    { image: IUsersIcon, title: "USERS", amount: "2,453" },
    { image: ActiveUsersIcon, title: "ACTIVE USERS", amount: "2,453" },
    { image: UsersLoanIcon, title: "USERS WITH LOANS", amount: "12,453" },
    { image: UsersSavingsIcon, title: "USERS WITH SAVINGS", amount: "102,453" },
  ];

  return (
    <Flex flexDir="row" gap={7}>
      {userCardItems.map((item, index) => (
        <Box key={index} w="240px" h="160px">
          <Box display="flex" flexDir="column" bgColor="#FFF" p="5">
            <Image src={item.image} alt="icons" w="25%" />
            <Text fontSize="14px" color="rgba(84, 95, 125, 1)">
              {item.title}
            </Text>
            <Text color="rgba(33, 63, 125, 1)" fontSize="24px" fontWeight="500">
              {item.amount}
            </Text>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default UserCardCmp;
