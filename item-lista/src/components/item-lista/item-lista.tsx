import {Component, h, Prop, Watch, Event, EventEmitter} from '@stencil/core';
import {toBRL} from "../../utils/currencyFormatter";

@Component({
  tag: 'item-lista',
  styleUrl: 'item-lista.scss',
  shadow: true,
})
export class ItemLista {

  @Prop()
  label: string;

  @Prop()
  value: number;

  @Prop({ mutable: true })
  checked = true;

  @Event() itemChecked: EventEmitter<boolean>;

  @Watch("checked")
  watchChecked(newValue: boolean){
    this.itemChecked.emit(newValue)
  }

  toggleCheckbox(){
    this.checked = !this.checked;
    console.log(this.checked);
  }

  render() {
    return (
      <div class={"container"} onClick={() => this.toggleCheckbox()}>
        <div>
          <input type="checkbox" checked={this.checked}/>
          <span class={`label ${this.checked ? 'checked' : ''}`}>{this.label} (R${toBRL(this.value)})</span>
        </div>

        <div class={"slotContainer"}>
          <slot/>
        </div>
      </div>
    );
  }
}
