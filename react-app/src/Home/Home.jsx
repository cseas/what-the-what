import { useState } from "react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import searchResults from "../api/searchResults.json";
import { SearchResult } from "./SearchResult";

export function Home() {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (newInput) => {
    setSearchInput(newInput.currentTarget.value);
    console.log(newInput.currentTarget.value);
  };

  return (
    <>
      <h1 className="h2-blue" style={{ paddingTop: "16px" }}>
        Wh@t <span className="h2-black">the</span> What!
      </h1>
      <main style={{ padding: "16px 24px 0" }}>
        <InputGroup>
          <Input
            variant="flushed"
            placeholder="Search your question..."
            focusBorderColor="#4200FF"
            value={searchInput}
            onChange={handleChange}
          />
          <InputRightElement children={<SearchIcon color="#B3B7C5" />} />
        </InputGroup>

        <section style={{ textAlign: "initial" }}>
          <h2 className="h3" style={{ paddingTop: "24px" }}>
            Un-answered questions ({searchResults.unansweredQuestions.length})
          </h2>

          {searchResults.unansweredQuestions.map(({ problem, tags }) => (
            <SearchResult problem={problem} tags={tags} />
          ))}
        </section>

        <section style={{ textAlign: "initial", paddingTop: "16px" }}>
          <h2 className="h3" style={{ paddingTop: "24px" }}>
            Latest answered questions (
            {searchResults.latestAnsweredQuestions.length})
          </h2>

          {searchResults.latestAnsweredQuestions.map(
            ({ problem, tags, answer }) => (
              <SearchResult problem={problem} tags={tags} answer={answer} />
            )
          )}
        </section>
      </main>
    </>
  );
}
