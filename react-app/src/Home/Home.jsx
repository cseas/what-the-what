import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { SearchResult } from "./SearchResult";

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

        <section style={{ textAlign: "initial" }}>
          <h2 className="h3" style={{ paddingTop: "24px" }}>
            Un-answered questions (5)
          </h2>

          <SearchResult
            problem="What's the full form of MAU?"
            tags={["BU: X", "General"]}
          />
        </section>
      </main>
    </>
  );
}
