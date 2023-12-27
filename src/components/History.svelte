<script lang="ts">
  const sections = {
    "Title 1": ["paragraph", "已受理"],
    "Title 2": ["paragraph", "已解决"],
    "Title 3": ["paragraph", "已拒绝"],
    "Title 4": ["paragraph", "已接受"],
    "Title 5": ["paragraph", "已提交"],
  };

  enum ReportType {
    REPORT,
    ADVICE,
    BUG,
  }

  enum ProgressType {
    SUBMIT,
    PROCESS,
    REJECT,
    ACCEPT,
    FINISH,
  }

  const history = [
    {
      title: "腐竹我怎么进不去服务器",
      type: ReportType.BUG,
      progress: ProgressType.FINISH,
      number: 0,
    },
    {
      title: "腐竹你这服务器保熟吗？???????????????????????",
      type: ReportType.BUG,
      progress: ProgressType.FINISH,
      number: 0,
    },
  ];

  let report_types = {
    0: "举报",
    1: "建议",
    2: "错误",
  };

  let progress_types = {
    0: "已提交",
    1: "处理中",
    2: "被拒绝",
    3: "已接受",
    4: "已完成",
  };
</script>

<div
  class="flex-1 w-100% h-52 bg-transparent m-t-1 flex-col border-rd-5 border-1 border-solid overflow-auto transition-all"
>
  <button class="w-100% h-12 border-b-1 border-solid">
    <div class="table-row h-100%">
      <p class="table-cell v-middle w-60% text-center m-l-1">标题</p>
      <p class="table-cell v-middle w-30.7% text-center m-l-1">类型</p>
      <p class="table-cell v-middle w-10% text-center m-l-1">进度</p>
    </div>
  </button>
  {#each history as { title, type, progress, number }}
    <a href="./{number}">
      <button class="w-100% h-12 border-b-1 border-solid">
        <div class="table-row h-100% w-100% truncate">
          {#if title.length > 12}
            <p class="table-cell h-100% text-center v-middle w-60%">
              {title.slice(0, 11)}
            </p>
          {:else}
            <p class="table-cell h-100% text-center v-middle w-60%">{title}</p>
          {/if}
          <p class="table-cell h-100% text-center v-middle w-20%">
            {report_types[type]}
          </p>
          <div
            class="border-rd-2 border-1 border-solid p-x-3 p-y-0.5 table-cell h-100% text-center v-middle w-20%"
          >
            {progress_types[progress]}
          </div>
        </div>
      </button>
    </a>
  {/each}
</div>
<a href="./"><button class="p-t-5 text-[#000] m-2 m-b-5 border-solid border-b-2">添加反馈</button></a>

<!-- <style type="text/css">
    .table-tr {display: table-row; height: 30px;}
    .table-th {display: table-cell;font-weight: bold;height: 100%;border: 1px solid gray;text-align: center;vertical-align: middle;background-color:#E5E5E5;}
    .table-td {display: table-cell; height: 100%;border: 1px solid gray; text-align: center;vertical-align: middle;}
</style> -->
