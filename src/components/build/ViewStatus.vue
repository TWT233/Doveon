<i18n>
zh_CN:
  Status: 面板属性
  HP: 生命值
  HP_REG: 生命回复
  ATK_PHY: 物理攻击力
  ATK_MAG: 魔法攻击力
  ATK_ABS: 绝对攻击力
  ATK_SPD: 攻击速度
  THR_PHY: 物理穿透
  THR_MAG: 魔法穿透
  SKI_CHA: 技能释放几率
  CRI_CHA: 暴击几率
  THR_CRI: 暴击穿透
  HP_STL: 生命偷取
  DEF_PHY: 物理防御
  DEF_MAG: 魔法防御
  BAR_PHY: 物理减伤
  BAR_MAG: 魔法减伤
  SHD: 能量护盾
  SHD_REG: 护盾回复
  REF: 伤害反弹
</i18n>

<template>
  <v-card>
    <v-card-title>{{ $t("Status") }}</v-card-title>
    <v-card-text>
      <v-simple-table dense>
        <tbody>
          <tr>
            <td>{{ $t("HP") }}</td>
            <td>{{ Math.floor(value.HP) }}</td>
          </tr>
          <tr>
            <td>{{ $t("HP_REG") }}</td>
            <td>
              {{ Math.floor(value.HP_REG_K) }}% +
              {{ Math.floor(value.HP_REG_C) }}
            </td>
          </tr>
          <tr>
            <td>{{ $t("ATK_PHY") }}</td>
            <td>
              {{ Math.floor(value.ATK_PHY_A) }} +
              {{ Math.floor(value.ATK_PHY_B) }}
            </td>
          </tr>
          <tr>
            <td>{{ $t("ATK_MAG") }}</td>
            <td>
              {{ Math.floor(value.ATK_MAG_A) }} +
              {{ Math.floor(value.ATK_MAG_B) }}
            </td>
          </tr>
          <tr>
            <td>{{ $t("ATK_ABS") }}</td>
            <td>{{ Math.floor(value.ATK_ABS) }}</td>
          </tr>
          <tr>
            <td>{{ $t("ATK_SPD") }}</td>
            <td>
              {{ Math.floor(value.ATK_SPD_A) }} +
              {{ Math.floor(value.ATK_SPD_B) }}
            </td>
          </tr>
          <tr>
            <td>{{ $t("THR_PHY") }}</td>
            <td>
              {{ Math.floor(value.THR_PHY_K) }}% +
              {{ Math.floor(value.THR_PHY_C) }}
            </td>
          </tr>
          <tr>
            <td>{{ $t("THR_MAG") }}</td>
            <td>
              {{ Math.floor(value.THR_MAG_K) }}% +
              {{ Math.floor(value.THR_MAG_C) }}
            </td>
          </tr>
          <tr>
            <td>{{ $t("SKI_CHA") }}</td>
            <td>
              {{ Math.floor(value.SKI_CHA) }}
              ({{ SKI_CHA_RATE }}%)
            </td>
          </tr>
          <tr>
            <td>{{ $t("CRI_CHA") }}</td>
            <td>
              {{ Math.floor(value.CRI_CHA) }}
              ({{ CRI_CHA_RATE }}%)
            </td>
          </tr>
          <tr>
            <td>{{ $t("THR_CRI") }}</td>
            <td>{{ Math.floor(value.THR_CRI) }}%</td>
          </tr>
          <tr>
            <td>{{ $t("HP_STL") }}</td>
            <td>{{ Math.floor(value.STL) }}%</td>
          </tr>
          <tr>
            <td>{{ $t("DEF_PHY") }}</td>
            <td>
              {{ Math.floor(value.DEF_PHY_A) }} +
              {{ Math.floor(value.DEF_PHY_B) }}
              ({{ DEF_PHY_RATE }}%)
            </td>
          </tr>
          <tr>
            <td>{{ $t("DEF_MAG") }}</td>
            <td>
              {{ Math.floor(value.DEF_MAG_A) }} +
              {{ Math.floor(value.DEF_MAG_B) }}
              ({{ DEF_MAG_RATE }}%)
            </td>
          </tr>
          <tr>
            <td>{{ $t("BAR_PHY") }}</td>
            <td>{{ Math.floor(value.BAR_PHY) }}</td>
          </tr>
          <tr>
            <td>{{ $t("BAR_MAG") }}</td>
            <td>{{ Math.floor(value.BAR_MAG) }}</td>
          </tr>
          <tr>
            <td>{{ $t("SHD") }}</td>
            <td>{{ Math.floor(value.SHD) }}</td>
          </tr>
          <tr>
            <td>{{ $t("SHD_REG") }}</td>
            <td>
              {{ Math.floor(value.SHD_REG_K) }}% +
              {{ Math.floor(value.SHD_REG_C) }}
            </td>
          </tr>
          <tr>
            <td>{{ $t("REF") }}</td>
            <td>{{ Math.floor(value.REF) }}%</td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Status } from "@/mechanism/build/Status";

@Component({})
export default class ViewStatus extends Vue {
  @Prop() value!: Status;

  get SKI_CHA_RATE() {
    return Math.floor(
      (Math.floor(this.value.SKI_CHA) * 100) /
        (Math.floor(this.value.SKI_CHA) + 99)
    );
  }

  get CRI_CHA_RATE() {
    return Math.floor(
      (Math.floor(this.value.CRI_CHA) * 100) /
        (Math.floor(this.value.CRI_CHA) + 99)
    );
  }

  get DEF_PHY_RATE() {
    return Math.floor(
      (this.value.DEF_PHY * 100) / (Math.abs(this.value.DEF_PHY) + 99)
    );
  }

  get DEF_MAG_RATE() {
    return Math.floor(
      (this.value.DEF_MAG * 100) / (Math.abs(this.value.DEF_MAG) + 99)
    );
  }
}
</script>

<style scoped></style>
