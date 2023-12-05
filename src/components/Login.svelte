<script lang="ts">
  let responseMessage: string;

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const response = await fetch("/api/report", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    responseMessage = data.message;
    if (response.status == 200) {
      document.cookie = "token=" + responseMessage + ";";
      location.reload();
    }
  }
</script>

<form
  on:submit={submit}
  method="post"
  enctype="multipart/form-data"
  target="niframe"
>
  <label
    class="text-[#212121] font-LXGW text-6 font-not-italic font-400 lh-normal m-2"
  >
    游戏 ID
  </label>
  <br />
  <input
    type="text"
    name="minecraft"
    required
    maxlength="16"
    minlength="3"
    class="w-100% h-14.75 border-rd-3 border-2 border-solid border-[#000] bg-[#FFF] p-2 m-2"
  />
  <label
    class="text-[#212121] font-LXGW text-6 font-not-italic font-400 lh-normal m-2"
  >
    验证 ID (6 位)
  </label>
  <br />
  <input
    type="text"
    name="username"
    required
    minlength="6"
    maxlength="6"
    class="w-100% h-14.75 border-rd-3 border-2 border-solid border-[#000] bg-[#FFF] p-2 m-2"
  />
  <button
    class="flex h-12 px-6 py-3 justify-between items-center self-stretch border-rd-3 bg-[#000] text-[#FFF] m-2"
    >下一步</button
  >
  {#if responseMessage}
    <p class="text-red">{responseMessage}</p>
  {/if}
</form>
<iframe name="niframe" style="display:none;"></iframe>
