import { Speakers } from "../LocalDatabase/bannerData";
import { HStack, Image, Stack } from "@chakra-ui/react";
import { SellerCard } from "./SellerCard";

export const Headphone = () => {
  const data = Speakers;
  return (
    <Stack flexDirection={["column", "row"]} m={"auto"} mb={"3em"} width={"90%"} border={"1px"}>
      <Image src={"https://img.gkbcdn.com/bb/tronsmart-20221007152616686._p1_.jpg"} width={"25vw"}></Image>
      <HStack>
        {data.map((item, i) => {
          return <SellerCard key={i + 1} item={item} />;
        })}
      </HStack>
    </Stack>
  );
};
