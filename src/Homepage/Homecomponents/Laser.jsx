import { HStack, Image, Stack } from "@chakra-ui/react";
import { Laserdata } from "../LocalDatabase/bannerData";
import { SellerCard } from "./SellerCard";

export const Laser = () => {
  const data = Laserdata;
  return (
    <Stack flexDirection={["column", "row"]} m={"auto"} mt={"3em"} width={"90%"} border={"1px"}>
      <Image src={"https://img.gkbcdn.com/bb/sculpfun-20221007152503762._p1_.jpg"} width={"25vw"}></Image>
      <HStack>
        {data.map((item, i) => {
          return <SellerCard key={i + 1} item={item} />;
        })}
      </HStack>
    </Stack>
  );
};
