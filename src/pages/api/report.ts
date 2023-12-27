import type { APIRoute } from "astro";

async function getMinecraft(name:string) : Promise<Response> {
  const response = await fetch("https://api.mojang.com/users/profiles/minecraft/" + name, {
    method: "GET"
  });
  return response;
}

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const minecraft = data.get("minecraft");
  const username = data.get("username");
  if (!minecraft || !username) {
    return new Response(
      JSON.stringify({
        message: "值不能为空",
      }),
      { status: 400 }
    );
  }
  if (
    typeof minecraft !== "string" ||
    minecraft.length > 16 ||
    minecraft.length < 3
  ) {
    return new Response(
      JSON.stringify({
        message: "请输入正确的 Minecraft 用户名",
      }),
      { status: 400 }
    );
  }
  if (typeof username !== "string" || username.length !== 6) {
    return new Response(
      JSON.stringify({
        message: "请输入正确的验证 ID",
      }),
      { status: 400 }
    );
  }

  let minestatus : Response = await getMinecraft(minecraft.toString());
  if(minestatus.status === 200) {
    const data = await minestatus.json();
    return new Response(
      JSON.stringify({
        message: data.id,
      }),
      { status: 400 }
    );
  }

  return new Response(
    JSON.stringify({
      message: "远程主机关闭了一个现有的连接",
    }),
    { status: 400 }
  );
};
