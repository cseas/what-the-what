import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export function Home() {
  return (
    <>
      <h1 className="h2-blue" style={{ paddingTop: "16px" }}>
        Wh@t <span className="h2-black">the</span> What!
      </h1>
      <main style={{ padding: "16px 24px 0" }}>
        <InputGroup>
          <Input
            variant="flushed"
            placeholder="Search for your query"
            focusBorderColor="#4200FF"
          />
          <InputRightElement children={<SearchIcon color="#B3B7C5" />} />
        </InputGroup>
      </main>
    </>
  );
}
