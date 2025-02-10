---
layout: page
title: Using EpyMARL on custon RWARE layouts
date: 2025-02-06
description: Part of a bigger project on efficient environment generation
img: assets/img/epymarl-rware.gif
importance: 1
category: work
---

## Github Repo

(https://github.com/bhuvvaan/epymarl-rware)[https://github.com/bhuvvaan/epymarl-rware]

## Custom RWARE training

EpyMARL is a helpful repository for running multi-agent RL problems. For my work I modified it to easily run for a custom RWARE environment.

<div class="row justify-content-center">
  <div class="col-auto text-center">
    <!-- The inline style below limits the figure to 300px wide -->
    {% include figure.liquid 
      path="assets/img/epymarl-rware.png" 
      title="Custom warehouse with four agents"
      class="img-fluid d-block mx-auto rounded z-depth-1" 
      style="max-width: 300px;"
    %}
  </div>
</div>
<div class="caption text-center">
   This is a custom 10x10 grid that was generated and trained using EpyMARL.
</div>

To register a custom RWARE environment, go to epymarl-rware/src/marl.py file and give the layout of the custom environment.

To train a RL algorithm on the environment use the command.

```shell
python src/main.py --config=qmix --env-config=gymma with env_args.time_limit=500 env_args.key="marl:your-env-name" save_model=True
```

If common reward is insufficient and individual rewards are needed, `common_reward=False`.

```shell
python src/main.py --config=qmix --env-config=gymma with env_args.time_limit=500 env_args.key="marl:your-env-name" save_model=True common_reward=False
```

To visualize results, run from the root folder, after selecting the required metric.

```shell
 python3 plot_results.py --path ./results/sacred/qmix/your-env-name --metric test_return_mean --save_dir ./plots
```

To render results, run from the root folder, after selecting the required model.

```shell
 python src/main.py --config=qmix --env-config=gymma with env_args.time_limit=25 env_args.key="marl:r-tiny-2ag-v2" checkpoint_path="./results/models/your-model-folder" evaluate=True render=True
```

For readme of EpyMARL, visit [https://github.com/uoe-agents/epymarl/blob/main/README.md](https://github.com/uoe-agents/epymarl/blob/main/README.md)
