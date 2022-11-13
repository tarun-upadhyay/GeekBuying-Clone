import { HStack, Image, Stack } from "@chakra-ui/react";
import { Printing } from "../LocalDatabase/bannerData";
import { SellerCard } from "./SellerCard";

export const Printer = () => {
  const data = Printing;
  return (
    <Stack flexDirection={["column", "row"]} m={"auto"} mb={"3em"} width={"90%"} border={"1px"}>
      <Image src={"https://img.gkbcdn.com/bb/creality-20221007150037712._p1_.jpg"} width={"25vw"}></Image>
      <HStack>
        {data.map((item, i) => {
          return <SellerCard key={i + 1} item={item} />;
        })}
      </HStack>
    </Stack>
  );
};
