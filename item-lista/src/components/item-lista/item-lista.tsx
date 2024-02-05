import {Component, h, Prop, Watch, Event, EventEmitter, Element} from '@stencil/core';
import {toBRL} from "../../utils/currencyFormatter";

@Component({
  tag: 'item-lista',
  styleUrl: 'item-lista.scss',
  shadow: true,
})
export class ItemLista {

  @Element()
  _elemt: HTMLElement;

  @Prop()
  label: string;

  @Prop()
  value: number;

  @Prop({ mutable: true })
  checked = true;

  @Event() itemChecked: EventEmitter<ItemListaOpject>;

  @Watch("checked")
  watchChecked(newValue: boolean){
    const item = {
      id: this._elemt.id,
      label: this.label,
      value: this.value,
      checked: newValue,
    }
    this.itemChecked.emit(item);
  }

  toggleCheckbox(){
    this.checked = !this.checked;
  }

  render() {
    return (
      <div class={"container"}>
        <div onClick={() => this.toggleCheckbox()}>
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

export interface ItemListaOpject {
  id: string;
  label: string;
  value: number;
  checkd?: boolean;
}
