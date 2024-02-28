<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <h1 class="text-2xl text-slate-900 font-bold mt-8">
    {{ $t('title.standings-u18') }}
  </h1>
  <div class="py-8">
    <!-- <mjsz-vbr-standings :locale="locale" championship-id="3445" /> -->
    <div>
      <table>
        <thead>
          <tr>
            <th>
              <div>Pos</div>
            </th>
            <th>
              <div>Team name</div>
            </th>
            <th>
              <div>Total tournament participation</div>
            </th>
            <th>
              <div>Best 3 results</div>
            </th>
            <th>GD</th>
            <th>
              <div>Tournament points</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>TRE</td>
            <td>3</td>
            <td>
              <div>23.08.19, 23.09.01, 23.12.16.</div>
            </td>
            <td>28</td>
            <td>7</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>ITA</td>
            <td>3</td>
            <td>
              <div>23.09.01, 23.08.19, 24.01.06.</div>
            </td>
            <td>18</td>
            <td>7</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>RBS</td>
            <td>4</td>
            <td>
              <div>23.08.19, 23.12.16, 24.01.06</div>
            </td>
            <td>17</td>
            <td>7</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>POL</td>
            <td>3</td>
            <td>
              <div>23.08.19, 23.09.01, 24.01.06.</div>
            </td>
            <td>16</td>
            <td>7</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>HKN</td>
            <td>2</td>
            <td>
              <div>23.08.18, 23.09.01.</div>
            </td>
            <td>20</td>
            <td>6</td>
          </tr>
          <tr>
            <td>6.</td>
            <td>SBR</td>
            <td>3</td>
            <td>
              <div>23.08.19, 23.09.02, 23.12.16.</div>
            </td>
            <td>17</td>
            <td>6</td>
          </tr>
          <tr>
            <td>7.</td>
            <td>&Uacute;JA</td>
            <td>4</td>
            <td>
              <div>23.08.19, 23.09.01, 23.12.17.</div>
            </td>
            <td>1</td>
            <td>6</td>
          </tr>
          <tr>
            <td>8.</td>
            <td>LJS</td>
            <td>3</td>
            <td>
              <div>23.09.02, 23.09.01, 23.12.16.</div>
            </td>
            <td>-6</td>
            <td>5</td>
          </tr>
          <tr>
            <td>9.</td>
            <td>SEC</td>
            <td>3</td>
            <td>
              <div>23.09.02, 23.08.19, 23.12.16.</div>
            </td>
            <td>-7</td>
            <td>5</td>
          </tr>
          <tr>
            <td>10.</td>
            <td>THU</td>
            <td>2</td>
            <td>
              <div>23.09.02, 23.12.16.</div>
            </td>
            <td>-1</td>
            <td>4</td>
          </tr>
          <tr>
            <td>11.</td>
            <td>EAS</td>
            <td>3</td>
            <td>
              <div>23.09.01, 23.08.19, 24.01.06.</div>
            </td>
            <td>-1</td>
            <td>4</td>
          </tr>
          <tr>
            <td>12.</td>
            <td>KYI</td>
            <td>4</td>
            <td>
              <div>23.09.01, 23.08.19, 23.12.16.</div>
            </td>
            <td>-7</td>
            <td>4</td>
          </tr>
          <tr>
            <td>13.</td>
            <td>POR</td>
            <td>2</td>
            <td>
              <div>23.08.18, 23.09.01.</div>
            </td>
            <td>4</td>
            <td>3</td>
          </tr>
          <tr>
            <td>14.</td>
            <td>ZLN</td>
            <td>1</td>
            <td>
              <div>23.09.01-03.</div>
            </td>
            <td>4</td>
            <td>3</td>
          </tr>
          <tr>
            <td>15.</td>
            <td>FEH</td>
            <td>3</td>
            <td>
              <div>23.08.19, 23.09.01, 24.01.06.</div>
            </td>
            <td>-19</td>
            <td>3</td>
          </tr>
          <tr>
            <td>16.</td>
            <td>MIS</td>
            <td>3</td>
            <td>
              <div>23.09.01, 23.08.19, 24.01.06.</div>
            </td>
            <td>-16</td>
            <td>2</td>
          </tr>
          <tr>
            <td>17.</td>
            <td>BJA</td>
            <td>3</td>
            <td>
              <div>23.08.19, 23.09.01, 24.01.06.</div>
            </td>
            <td>-26</td>
            <td>2</td>
          </tr>
          <tr>
            <td>18.</td>
            <td>KAC</td>
            <td>1</td>
            <td>
              <div>23.08.18-20.</div>
            </td>
            <td>-5</td>
            <td>1</td>
          </tr>
          <tr>
            <td>19.</td>
            <td>VAS</td>
            <td>1</td>
            <td>
              <div>23.09.01-03.</div>
            </td>
            <td>-6</td>
            <td>0</td>
          </tr>
          <tr>
            <td>20.</td>
            <td>KRA</td>
            <td>1</td>
            <td>
              <div>23.09.01-03.</div>
            </td>
            <td>-12</td>
            <td>0</td>
          </tr>
          <tr>
            <td>21.</td>
            <td>VIC</td>
            <td>4</td>
            <td>
              <div>23.08.19, 23.09.02, 24.01.06.</div>
            </td>
            <td>-31</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
