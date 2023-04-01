import { useList } from "@pankod/refine-core";
import {
  PieChart,
  PropertyReferrals,
  PropertyCard,
  TotalRevenue,
  TopAgent,
} from "components";

import { Typography, Box, Stack } from "@pankod/refine-mui";

export default function Home() {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color={"#11142D"}>
        Dashboard
      </Typography>
      <Box mt="20px" display={"flex"} flexWrap={"wrap"} gap={4}>
        <PieChart
          title="Properties For Sale"
          value={684}
          series={[72, 25]}
          colors={["#475be8", "#e4b8ef"]}
        />
        <PieChart
          title="Properties For Rent"
          value={684}
          series={[60, 40]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Total customers"
          value={5684}
          series={[72, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Properties for Cities"
          value={555}
          series={[72, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
      </Box>
      <Stack
        mt={"25px"}
        width="100%"
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  );
}
