<script lang="ts">
import Account from './Account.svelte';
  let responseMessage: string;

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    // const response = await fetch("/api/ticket", {
    //   method: "POST",
    //   body: formData,
    // });
    // const data = await response.json();
    // responseMessage = data.message;
    // if (response.status == 200) {
    //   document.cookie = "token=" + responseMessage + ";";
    // }
  }
</script>

<label
  class="text-[#212121] font-LXGW text-6 font-not-italic font-400 lh-normal m-2"
>
  当前账号
</label>
<Account />
<br />
  <label
    class="text-[#212121] font-LXGW text-6 font-not-italic font-400 lh-normal m-2"
  >
    反馈类型
  </label>
  <div class="flex w-100% h-100% z-0 bg-transparent justify-around p-t-5">
    <a href="./type/bug"><button class="transition-all h-35 w-35 border-rd-5 border-1 border-solid text-[#000] m-2 hover:scale-110 hover:bg-#F5F4FF bg-#ECE2FF"><div class="i-tabler-bug m-auto text-4xl" />程序错误</button></a>
    <a href="./type/advice"><button class="transition-all h-35 w-35 border-rd-5 border-1 border-solid text-[#000] m-2 hover:scale-110 hover:bg-#F5F4FF bg-#ECE2FF"><div class="i-tabler-directions m-auto text-4xl" />反馈建议</button></a>
    <a href="./type/report"><button class="transition-all h-35 w-35 border-rd-5 border-1 border-solid text-[#000] m-2 hover:scale-110 hover:bg-#F5F4FF bg-#ECE2FF"><div class="i-tabler-alert-triangle m-auto text-4xl" />玩家举报</button></a>
  </div>

  <a href="./dashboard"><button class="p-t-5 text-[#000] m-2 m-b-5 border-solid border-b-2">历史反馈</button></a>

<style>
</style>
