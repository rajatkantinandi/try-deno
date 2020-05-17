const iter = Deno.watchFs("./src/index.tsx");

await compile("./src/index.tsx", "./public/index.js");

for await (const event of iter) {
  if (event.kind === "modify") {
    await compile("./src/index.tsx", "./public/index.js");
  }
}

async function compile(filePath: string, outputPath: string) {
  const timeNow = new Date().valueOf();
  const [errors, emitted] = await Deno.bundle(filePath);

  Deno.writeTextFileSync(outputPath, emitted);
  console.log("Bundle built in " + (new Date().valueOf() - timeNow) + "ms");
}
