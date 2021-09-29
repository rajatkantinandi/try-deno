const iter = Deno.watchFs("./src/index.tsx");

await compile("./src/index.tsx", "./public/js/");

for await (const event of iter) {
  if (event.kind === "modify") {
    await compile("./src/index.tsx", "./public/js/");
  }
}

async function compile(filePath: string, outputDir: string) {
  const timeNow = new Date().valueOf();
  const { files } = await Deno.emit(filePath, { bundle: 'module' });

  for (const [fileName, text] of Object.entries(files)) {
    const dest = outputDir + fileName.replace('deno:///', '');
    console.log('Written:', dest);
    Deno.writeTextFileSync(dest, text);
  }
  console.log("Bundle built in " + (new Date().valueOf() - timeNow) + "ms");
}
