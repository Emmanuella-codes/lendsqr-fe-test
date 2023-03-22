import {
  Box,
  BoxProps,
  Flex,
  CloseButton,
  Icon,
  Text,
  FlexProps,
  IconButton,
  Image,
  HStack,
  FormControl,
  Input,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  AvatarBadge,
  Drawer,
  DrawerContent,
  useToast,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { ISVGS } from "../../assets/types";
import BriefCaseIcon from "../../assets/SvgCmp/BriefCase.svg.react";
import HomeIcon from "../../assets/SvgCmp/Home.svg.react";
import UsersIcon from "../../assets/SvgCmp/Users.svg.react";
import GuarantorsIcon from "../../assets/SvgCmp/UserFriends.svg.react";
import LoanIcon from "../../assets/SvgCmp/MoneySack.svg.react";
import DecisionModelIcon from "../../assets/SvgCmp/Handshake.svg.react";
import SavingsIcon from "../../assets/SvgCmp/PiggyBank.svg.react";
import LoanRequestIcon from "../../assets/SvgCmp/Loan.svg.react";
import WhitelistIcon from "../../assets/SvgCmp/UserCheck.svg.react";
import KarmaIcon from "../../assets/SvgCmp/UserTimes.svg.react";
import SavingsProductIcon from "../../assets/SvgCmp/Bank.svg.react";
import CoinsIcon from "../../assets/SvgCmp/Coins.svg.react";
import TransactionIcon from "../../assets/SvgCmp/Transaction.svg.react";
import ServicesIcon from "../../assets/SvgCmp/Galaxy.svg.react";
import ServiceAccountIcon from "../../assets/SvgCmp/UserSettings.svg.react";
import SettlementIcon from "../../assets/SvgCmp/Scroll.svg.react";
import ReportIcon from "../../assets/SvgCmp/BarChart.svg.react";
import PreferencesIcon from "../../assets/SvgCmp/Slider.svg.react";
import FeesIcon from "../../assets/SvgCmp/BadgePercent.svg.react";
import AuditIcon from "../../assets/SvgCmp/Clipboard.svg.react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FiMenu } from "react-icons/fi";
import LendsqrLogo from "../../assets/lendsqr-logo.svg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface SVGIconType extends IconType, ISVGS {}

interface DropdownMenuProps {
  name: string;
  url: string;
  icon: SVGIconType;
}

interface SidebarItemProps {
  name: string;
  url?: string;
  dropdownMenus?: DropdownMenuProps[];
  onclick?: (event: any) => void;
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

const UserDashboard = () => {
  const customers: DropdownMenuProps[] = [
    { name: "Users", url: "/users", icon: UsersIcon },
    { name: "Guarantors", url: "/not-found", icon: GuarantorsIcon },
    { name: "Loans", url: "/not-found", icon: LoanIcon },
    { name: "Decision Models", url: "/not-found", icon: DecisionModelIcon },
    { name: "Savings", url: "/not-found", icon: SavingsIcon },
    { name: "Loan Requests", url: "/not-found", icon: LoanRequestIcon },
    { name: "Whitelist", url: "/not-found", icon: WhitelistIcon },
    { name: "Karma", url: "/not-found", icon: KarmaIcon },
  ];

  const businesses: DropdownMenuProps[] = [
    { name: "Organization", url: "/not-found", icon: BriefCaseIcon },
    { name: "Loan Products", url: "/not-found", icon: LoanRequestIcon },
    { name: "Savings Products", url: "/not-found", icon: SavingsProductIcon },
    { name: "Fees and Charges", url: "/not-found", icon: CoinsIcon },
    { name: "Transactions", url: "/not-found", icon: TransactionIcon },
    { name: "Services", url: "/not-found", icon: ServicesIcon },
    { name: "Service Account", url: "/not-found", icon: ServiceAccountIcon },
    { name: "Settlements", url: "/not-found", icon: SettlementIcon },
    { name: "Reports", url: "/not-found", icon: ReportIcon },
  ];

  const settings: DropdownMenuProps[] = [
    { name: "Preferences", url: "/not-found", icon: PreferencesIcon },
    { name: "Fees and Pricing", url: "/not-found", icon: FeesIcon },
    { name: "Audit Logs", url: "/not-found", icon: AuditIcon },
  ];

  const sidebarItems: SidebarItemProps[] = [
    { name: "Customers", dropdownMenus: customers },
    { name: "Businesses", dropdownMenus: businesses },
    { name: "Settings", dropdownMenus: settings },
  ];

  const toast = useToast({
    position: "top",
    containerStyle: {
      zIndex: 9,
    },
  });
  const navigate = useNavigate();
  const goToLoginPage = () => {
    toast({
      status: "success",
      description: "Logged out successfully",
    });
    navigate("/login");
  };

  const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
      <Box
        transition="3s ease"
        bg="#FFF"
        w={{ base: "full", md: 60 }}
        pos="fixed"
        {...rest}
        display="flex"
        flexDir="column"
      >
        <Flex flexDir="column">
          <CloseButton
            display={{ base: "flex", lg: "none" }}
            onClick={onClose}
          />
        </Flex>
        <Box display={"flex"} flexDir="row" gap={2} alignItems="center">
          <Icon as={BriefCaseIcon} />
          <Text>Switch Organization</Text>
          <ChevronDownIcon />
        </Box>
        <Box display="flex" flexDir="row" gap={2} alignItems="center">
          <Icon as={HomeIcon} />
          <Text>Dashboard</Text>
        </Box>
        <Flex flexDir="column">
          <Text>Customers</Text>
          <Box>
            {sidebarItems[0].dropdownMenus?.map((item, index) => (
              <Box key={index} display="flex" gap={2} alignItems="center">
                <Icon as={item.icon} />
                <Text>{item.name}</Text>
              </Box>
            ))}
          </Box>
        </Flex>
        <Flex flexDir="column">
          <Text>Businesses</Text>
          <Box>
            {sidebarItems[1].dropdownMenus?.map((item, index) => (
              <Box key={index} display="flex" gap={2} alignItems="center">
                <Icon as={item.icon} />
                <Text>{item.name}</Text>
              </Box>
            ))}
          </Box>
        </Flex>
        <Flex flexDir="column">
          <Text>Settings</Text>
          <Box>
            {sidebarItems[2].dropdownMenus?.map((item, index) => (
              <Box key={index} display="flex" gap={2} alignItems="center">
                <Icon as={item.icon} />
                <Text>{item.name}</Text>
              </Box>
            ))}
          </Box>
        </Flex>
      </Box>
    );
  };

  const DesktopNav = () => (
    <Flex
      ml={{ base: 0 }}
      px={"4"}
      height="20"
      alignItems="center"
      bg="#FFF"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      justifyContent="space-between"
      w="full"
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label={"open menu"}
        icon={<FiMenu />}
      />
      <Image src={LendsqrLogo} />

      <FormControl id="search" w="sm">
        <Flex flexDir="row" alignItems="center">
          <Input
            id="search"
            type="text"
            name="search"
            outlineColor="gray.300"
            color="gray.600"
            placeholder="Search for anything"
            size="sm"
          />
          <Box
            bgColor="rgba(57, 205, 204, 1)"
            w="42px"
            h="38.4px"
            zIndex={1}
            borderRightRadius="sm"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="#FFF"
          >
            <SearchIcon />
          </Box>
        </Flex>
      </FormControl>
      <HStack spacing={{ base: 0, md: 6 }}>
        <Text textDecor="underline" color="#213F7D">
          Docs
        </Text>
        <IconButton
          aria-label="open menu"
          icon={<IoMdNotificationsOutline />}
          bgColor="transparent"
          size="lg"
        />
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
          >
            <HStack>
              <Avatar>
                <AvatarBadge boxSize={6} bg="rgba(57, 205, 204, 1)" />
              </Avatar>
              <Text fontSize="sm">Adedeji</Text>
              <Box display={{ base: "none", md: "flex" }}>
                <ChevronDownIcon />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={goToLoginPage}>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Flex>
  );

  const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
      <Flex
        ml={{ base: 0 }}
        px={"4"}
        height="20"
        alignItems="center"
        bg="#FFF"
        borderBottomWidth="1px"
        borderBottomColor="gray.200"
        justifyContent="space-between"
        w="full"
        {...rest}
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label={"open menu"}
          icon={<FiMenu />}
        />
        <Image src={LendsqrLogo} w="28%" />
        <HStack spacing={{ base: 0, md: 6 }}>
          <IconButton
            bgColor="transparent"
            aria-label="open menu"
            icon={<IoMdNotificationsOutline />}
          />
          <Avatar>
            <AvatarBadge boxSize={6} bg="rgba(57, 205, 204, 1)" />
          </Avatar>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <ChevronDownIcon />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={goToLoginPage}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    );
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        {/* mobilenav */}
        <Box display={{ base: "block", md: "none" }}>
          <MobileNav onOpen={onOpen} />
          <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            onOverlayClick={onClose}
            size="full"
          >
            <DrawerContent>
              <SidebarContent onClose={onClose} />
            </DrawerContent>
          </Drawer>
        </Box>
        {/* main content */}
        <Box display={{ base: "none", md: "block" }}>
          <DesktopNav />
          <SidebarContent onClose={() => onClose} display="flex" />
        </Box>
      </Box>
    </>
  );
};

export default UserDashboard;
